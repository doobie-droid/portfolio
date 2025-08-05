export default ($Axios) => ({
  async fetchPosts(pageNumber = 1) {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    await new Promise((resolve) => setTimeout(resolve, delay));
    const data = await import("~/data/posts.json");
    const allPosts = data.default;

    const PAGE_SIZE = 3;
    const start = (pageNumber - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    return {
      data: allPosts.slice(start, end),
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };
  },
});
