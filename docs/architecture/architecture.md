%%{init: { 'gitGraph': {'mainBranchName': 'main'}} }%%
gitGraph
    commit id: "#01" tag: "init"
    branch feat/login
    commit id: "#02" tag: "login"
    checkout main
    branch origin/feat/login
    checkout origin/feat/login
    merge "feat/login" 