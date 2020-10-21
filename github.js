class Github {
  constructor() {
    this.clientID = 'e90c8675a4101ea9bb09';
    this.clientSecret = 'faab3166d12ce6e50602a2184a5a9da794b45d3a';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.clientID}&client_secret=${this.clientSecret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();


    return {
      profile: profile,
      repos: repos
    };
  }
}
