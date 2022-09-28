export default {
    title: "Gallery",
    name: "gallery",
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
  