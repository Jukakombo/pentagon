export default {
  title: "Gallery",
  name: "gallery",
  type: "document",
  fields: [
    {
      title: "Profile Image",
      name: "imageUrl",
      type: "image",
      option: {
        hotspot: true,
      },
    },
    {
      title: "Name",
      name: "name",
      type: "string",
    },

    {
      title: "Hastag",
      name: "hastag",
      type: "string",
    },
  ],
};
