// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import studentForm from "./studentForm";
import teacherForm from "./teacherForm";
import schoolNews from "./schoolNews";
import comment from "./comment";
import gallery from "./gallery";
import subscriber from "./subscriber";
import studentsArticles from "./studentsArticles";
import timetable from "./timetable";
import beneficiary from "./beneficiary";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    studentForm,
    teacherForm,
    studentsArticles,
    schoolNews,
    comment,
    gallery,
    subscriber,
    timetable,beneficiary
   
  ]),
});
