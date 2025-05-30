const dbConnection = require("./sqlite");
const testBase = require("../backend/test/testBase")
dbConnection
    .getDbConnection()
    .then((db) => {
        init(db);
    })
    .catch((err) => {
        console.log(err);
        throw err;
    });

let _db;

function init(db) {
    _db = db;
}

const knex_db = require("./db-config");

const dbinitialize = async () => {
    testBase.resetDatabase(knex_db);
}

const readTeachers = async () => {
    // const sql = `SELECT * FROM dummyData`
    const sql = `SELECT * FROM teacher`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            // .then((data) => {
            //     resolve(data);
            .then((teachers) => {
                resolve(teachers);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readTeacherInfo = async (id) => {
    // const sql = `SELECT * FROM dummyData`
    // const sql = `SELECT * FROM teacher`
    const sql = `SELECT * FROM teacher WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            // .raw(sql)
            .raw(sql, [id])
            .then((teachers) => {
                resolve(teachers);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const addTeacher = async (id, name, age) => {
    // const sql = `SELECT * FROM dummyData`
    const sql = `SELECT * FROM teacher`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((teachers) => {
                // resolve(teachers);
                resolve({status: "Successfully inserted Teacher"})
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const updateTeacher = async (name, age, id) => {
    // const sql = `SELECT * FROM teacher`
    const sql = `UPDATE teacher SET name=?, age=? WHERE id=?`
    return new Promise((resolve, reject) => {
        knex_db
            // .raw(sql)
            .raw(sql, [name, age, id])
            .then((teachers) => {
                // resolve(teachers);
                resolve({ status: "Successfully updated Teacher" })
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const deleteTeacher = async (id) => {
    // const sql = `SELECT * FROM teacher`
    const sql = `DELETE FROM teacher WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            // .raw(sql)
            .raw(sql, [id])
            .then((teachers) => {
                // resolve(teachers);
                resolve({ status: "Successfully deleted Teacher" })
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudents = async () => {
    // const sql = `SELECT * FROM dummyData`
    const sql = `SELECT * FROM student`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((students) => {
                resolve(students);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudentInfo = async (id) => {
    // const sql = `SELECT * FROM student`
    const sql = `SELECT * FROM student WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            // .raw(sql)
            .raw(sql, [id])
            .then((students) => {
                resolve(students);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const addStudent = async (id, name, age, religion) => {
    const sql = `SELECT * FROM student`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((students) => {
                // resolve(student);
                resolve({status: "Successfully inserted Student"})
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const updateStudent = async (name, age, religion, id) => {
    // const sql = `SELECT * FROM student`
    const sql = `UPDATE student SET name=?, age=? WHERE id=?`
    return new Promise((resolve, reject) => {
        knex_db
            // .raw(sql)
            .raw(sql, [name, age, id])
            .then((students) => {
                // resolve(student);
                resolve({ status: "Successfully updated Student" })
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const deleteStudent = async (id) => {
    // const sql = `SELECT * FROM student`
    const sql = `DELETE FROM student WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            // .raw(sql)
            .raw(sql, [id])
            .then((readStudents) => {
                // resolve(student);
                resolve({ status: "Successfully deleted Teacher" })
            })
            .catch((error) => {
                reject(error);
            });
    });
}

module.exports = {
    readTeachers,
    readStudents,
    addStudent,
    addTeacher,
    deleteTeacher,
    deleteStudent,
    readStudentInfo,
    readTeacherInfo,
    updateStudent,
    updateTeacher,

    dbinitialize,

    // addTeacher,
    // readTeachers,
    // readTeacherInfo,
    // updateTeacher,
    // deleteTeacher
};
