export default {
    title: "Students Arts",
    name: "studentsArticles",
    type: "document",
    fields: [
      {
        title: "Articles Title",
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
      // portableText.js
      {
        name: "body",
        title: "Articles Details",
        type: "array",
        of: [
          {
            type: "block",
          },
           
        ],
      },
      {
        title: "Author",
        name: "author",
        type: "string",
      },
    ],
  };
  