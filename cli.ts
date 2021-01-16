import * as tkt from "tkt";

tkt
  .cli()
  .command(
    "pull-request <sha> <repo> <pat>",
    "",
    {
      sha: {},
      repo: {},
      pat: {},
    },
    async (args: any) => {
      const sha = args.sha;
      const pat = args.pat;
      const repo = args.repo;
      console.log("sha", sha);
      console.log("repo", repo);
    }
  )
  .parse();
