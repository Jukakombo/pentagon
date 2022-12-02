export default {
  title: "Exam Timetable",
  name: "timetable",
  type: "document",
  fields: [
    {
      title: "Description",
      name: "description",
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
  ],
};
