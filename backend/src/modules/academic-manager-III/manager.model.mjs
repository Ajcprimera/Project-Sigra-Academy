// Importar conexión a la base de datos
import { connection } from '../../../database/connection.mjs'

// Obtener cursos de un estudiante
export const getCoursesByStudentId = async (studentId) => {
  try {
    const [courses] = await connection.query(
      `SELECT c.* FROM courses c
       INNER JOIN enrollments e ON c.id = e.course_id
       WHERE e.student_id = ?`,
      [studentId]
    )
    return courses
  } catch (error) {
    throw new Error(`Error fetching courses: ${error.message}`)
  }
}

// Obtener detalle de un curso
export const getCourseById = async (courseId) => {
  try {
    const [course] = await connection.query(
      'SELECT * FROM courses WHERE id = ?',
      [courseId]
    )
    return course[0]
  } catch (error) {
    throw new Error(`Error fetching course: ${error.message}`)
  }
}

// Crear un nuevo curso
export const createCourse = async (courseData) => {
  const { name, code, teacher_id, description } = courseData
  try {
    const [result] = await connection.query(
      'INSERT INTO courses (name, code, teacher_id, description) VALUES (?, ?, ?, ?)',
      [name, code, teacher_id, description]
    )
    return result
  } catch (error) {
    throw new Error(`Error creating course: ${error.message}`)
  }
}