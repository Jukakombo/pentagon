export default {
    
    title: "Teacher Registration Form",
    name: "teacherForm",
    type: "document",
    fields: [
      {
        title: "Full Name",
        name: "fullName",
        type: "string"
      },
      {
        title: "I.D Number",
        name: "idNumber",
        type: "string"
      },
      {
        title: "Profile Picture",
        name: "profilePicture",
        type: "image",
        option:{
            hotspot:true
        }
      },
      {
        title: "Gender",
        name: "gender",
        type: "string"
      },
     
      {
        title: "D.O.B",
        name: "dateOfBirth",
        type: "string"
      },
      {
        title: "Address",
        name: "address",
        type: "string"
      },
      {
        title: "subjects",
        name: "subjects",
        type: "string"
      },
      
      {
        title: "contact",
        name: "contact",
        type: "string"
      },
      {
        title: "Class",
        name: "classTaken",
        type: "string"
      },
      {
        title: "Position",
        name: "position",
        type: "string"
      },
       
    ]
  }
