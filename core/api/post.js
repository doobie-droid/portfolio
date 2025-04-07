export default ($Axios) => ({
  fetchPosts(pageNumber = 1) {
    return $Axios.get(`/api/posts?page=${pageNumber}`);
  },
});
