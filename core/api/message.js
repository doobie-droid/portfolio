export default ($Axios) => ({
  GetMessages() {
    return $Axios.get(`/api/messages`);
  },
  CreateMessage(payload) {
    return $Axios.post(`/api/messages`, payload);
  },
});
