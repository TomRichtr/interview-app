export const getChannelsLocalStorage = () => {
  return JSON.parse(localStorage.getItem("channels"));
};

export const addChannelIntoLocalStorage = (channel) => {
  const currentChannels = getChannelsLocalStorage();
  if (!currentChannels) {
    localStorage.setItem("channels", JSON.stringify([channel]));
    return;
  }
  localStorage.setItem(
    "channels",
    JSON.stringify([channel, ...currentChannels])
  );
};

export const updateChannelIntoLocalStorage = (channel) => {
  let currentChannels = getChannelsLocalStorage();
  const editedIndex = currentChannels.findIndex(({ id }) => channel.id === id);
  currentChannels[editedIndex] = channel;
  localStorage.setItem("channels", JSON.stringify(currentChannels));
};
