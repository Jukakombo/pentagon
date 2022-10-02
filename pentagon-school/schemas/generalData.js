const generalData = {
  title: "General Data",
  name: "generalData",
  type: "document",
  fields: [
    {
      title: "Students Articles",
      name: "studentArticles",
      type: "array",
      of: [
        {
          title: "Enter Your Article Title",
          name: "title",
          type: "string",
        },

        {
          name: "profilePicture",
          title: "Author Profile Picture",
          type: "image",
          option: {
            hotspot: true,
          },
        },
        {
          name: "author",
          title: "Author Name",
          type: "string",
        },
      ],
    },

    // one array
    {
      title: "Best Student of the year",
      name: "studentOfTheYear",
      type: "array",
      of: [
        {
          title: "Full Name",
          name: "fullName",
          type: "string",
        },
        {
          title: "Best in What?",
          name: "holding",
          type: "string",
        },

        {
          name: "profilePhone",
          title: "Profile Picture",
          type: "image",
          option: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
export default generalData;
