import { execSync } from "node:child_process";
import semanticRelease from "semantic-release";

function run(command) {
  return execSync(command, {
    encoding: "utf8",
    stdio: ["inherit", "pipe", "inherit"],
  }).trim();
}

function log(message) {
  console.log(`\n${message}`);
}

try {
  const currentBranch = run("git branch --show-current");

  if (currentBranch !== "dev") {
    throw new Error(
      `You must create releases from the dev branch. Current branch: ${currentBranch}`,
    );
  }

  const status = run("git status --porcelain");

  if (status) {
    throw new Error(
      "Your working tree is not clean. Commit or stash your changes first.",
    );
  }

  log("Fetching latest branches and tags...");
  execSync("git fetch origin --tags", { stdio: "inherit" });

  log("Pulling latest dev...");
  execSync("git pull origin dev", { stdio: "inherit" });

  log("Calculating next semantic version...");

  const result = await semanticRelease(
    {
      branches: ["dev"],
      tagFormat: "v${version}",
      plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
      ],
      dryRun: true,
      ci: false,
    },
    {
      cwd: process.cwd(),
    },
  );

  if (!result) {
    throw new Error(
      "No releasable changes were found since the previous release.",
    );
  }

  const version = result.nextRelease.version;
  const releaseBranch = `release/v${version}`;

  log(`Next release: v${version}`);
  log(`Creating branch: ${releaseBranch}`);

  execSync(`git switch -c ${releaseBranch}`, {
    stdio: "inherit",
  });

  log(`Updating package version to ${version}...`);

  execSync(`npm version ${version} --no-git-tag-version`, {
    stdio: "inherit",
  });

  log("Committing version bump...");

  execSync("git add package.json package-lock.json", {
    stdio: "inherit",
  });

  execSync(`git commit -m "chore(release): v${version}"`, {
    stdio: "inherit",
  });

  log("Pushing release branch...");
  execSync(`git push -u origin ${releaseBranch}`, {
    stdio: "inherit",
  });

  const remoteUrl = run("git config --get remote.origin.url");

  const repoPath = remoteUrl
    .replace("git@github.com:", "")
    .replace("https://github.com/", "")
    .replace(/\.git$/, "");

  const encodedBranch = encodeURIComponent(releaseBranch);

  const prUrl =
    `https://github.com/${repoPath}/compare/` +
    `main...${encodedBranch}?expand=1`;

  console.log("\n✅ Release branch created successfully.");
  console.log(`Version: v${version}`);
  console.log(`Branch: ${releaseBranch}`);
  console.log("\nCreate the production PR here:");
  console.log(prUrl);
} catch (error) {
  console.error("\n❌ Release creation failed.");
  console.error(error.message);
  process.exit(1);
}
