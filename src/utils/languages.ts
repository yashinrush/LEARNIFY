export type Language = (typeof languages)[number];

const languages = [
  {
    name: "C++",
    nativeName: "OOP",
    viewBox: "0 2178 82 66",
    code: "cpp",
    imageUrl: "/cpp.png", 
  },
  {
    name: "Java",
    nativeName: "OOP",
    viewBox: "0 1914 82 66",
    code: "java",
    imageUrl: "/java.png", 
  },
  {
    name: "Python",
    nativeName: "Interpreted",
    viewBox: "0 1848 82 66",
    code: "py",
    imageUrl: "/py.png", 
  },
  {
    name: "JavaScript",
    nativeName: "Scripting",
    viewBox: "0 198 82 66",
    code: "js",
    imageUrl: "/js.png", 
  },
  {
    name: "React.JS",
    nativeName: "Web Development",
    viewBox: "0 924 82 66",
    code: "react",
    imageUrl: "/rs.png", 
  },
  {
    name: "Data Structures",
    nativeName: "Algorithm building",
    viewBox: "0 0 82 66",
    code: "ds",
    imageUrl: "/ds.png", // Add image URL
  },
  {
    name: "DBMS",
    nativeName: "SQL",
    viewBox: "0 66 82 66",
    code: "dbms",
    imageUrl: "/database.png", // Add image URL
  },
] as const;

export default languages;
