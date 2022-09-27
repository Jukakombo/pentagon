export default {
  title: "School News",
  name: "schoolNews",
  type: "document",
  fields: [
    {
      title: "Title of the News",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "Image",
      name: "imageUrl",
      type: "image",
      option: {
        hotspot: true,
      },
    },

    {
      title: "News Details",
      name: "newsDetails",
      type: "text",
    },
    {
      title: "Author",
      name: "author",
      type: "string",
    },
  ],
};
