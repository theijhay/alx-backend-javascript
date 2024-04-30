function getStudentsByLocation(students, city) {
  if (!Array.isArray(students) || typeof city !== 'string') {
    return [];
  }

  const studentsInCity = students.filter((student) => student.location === city);
  return studentsInCity;
}

export default getStudentsByLocation;
