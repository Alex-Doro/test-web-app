const utils = {
  isClient() {
    return typeof window !== undefined;
  },
};

export default utils;
