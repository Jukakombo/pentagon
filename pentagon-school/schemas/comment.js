export default {
  title: "Comments",
  name: "comment",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },

    {
      title: "Profile Image",
      name: "imageUrl",
      type: "image",
      option: {
        hotspot: true,
      },
    },
   
    {
      title: "Comment",
      name: "comment",
      type: "reference",
      to: {
        type: "schoolNews",
      },
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "WebsiteUrl",
      name: "webUrl",
      type: "string",
    },
  ],
};
