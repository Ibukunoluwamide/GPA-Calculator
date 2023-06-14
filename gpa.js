let array = []
let array2 = []
let array3 = []
const addCourse = () => {
    if (course.value == "") {
        alert("Invalid Course Name")
    }
    else if (courseunit.value == "" || courseunit.value < 0) {
        alert("Invalid Course Unit")
        
    } else if (coursescore.value == "" || coursescore.value > 100 || coursescore.value < 0) {
        alert("Invalid Course Score")
        
    }
    else {
        let userCourseScore = Number(coursescore.value)
        let userCourseUnit = courseunit.value
        array2.push(Number(courseunit.value))
        let gpa = {
            userCourse: course.value,
            userCourseUnit: courseunit.value,
            userCourseScore: coursescore.value,
            userGrade: grade.value
        }
        array.push(gpa)
        // console.log(array2);
        let gradePoint = 0

        displayTable.innerHTML = `<thead>
        <tr>
        <td>S/N</td>
            <td>COURSES</td>
            <td>COURSE UNIT</td>
            <td>SCORE</td>
            <td>GRADE</td>
            </tr>
            </thead>`
            array.map((gpa, index) => {
                if (gpa.userCourseScore <= 39) {
                    gpa.userGrade = "F"
                    
                    
            }
            else if (gpa.userCourseScore > 39 && gpa.userCourseScore <= 44) {
                gpa.userGrade = "E"
            }
            else if (gpa.userCourseScore > 44 && gpa.userCourseScore <= 49) {
                gpa.userGrade = "D"
            }
            else if (gpa.userCourseScore > 49 && gpa.userCourseScore <= 54) {
                gpa.userGrade = "CD"
            }
            else if (gpa.userCourseScore > 54 && gpa.userCourseScore <= 59) {
                gpa.userGrade = "C"
            }
            else if (gpa.userCourseScore > 59 && gpa.userCourseScore <= 64) {
                gpa.userGrade = "BC"
            }
            else if (gpa.userCourseScore > 64 && gpa.userCourseScore <= 69) {
                gpa.userGrade = "B"
            }
            else if (gpa.userCourseScore > 69 && gpa.userCourseScore <= 74) {
                gpa.userGrade = "AB"

            }
            else if (gpa.userCourseScore > 75 && gpa.userCourseScore <= 100) {
                gpa.userGrade = "A"
            }
        
            displayTable.innerHTML += `  <tr>
                <td>${index + 1}</td>
                <td>${gpa.userCourse}</td>
                <td>${gpa.userCourseUnit}</td>
                <td>${gpa.userCourseScore}</td>
                <td>${gpa.userGrade}</td>
                </tr>`
        })
        // total Course Unit
        let sum = 0
        array2.map(e => { sum += e })
        // console.log(sum);
        let totalUnit = sum
        console.log(totalUnit);



        //  console.log(userCourseScore*userCourseUnit);

        if (userCourseScore <= 39) {
            gradePoint = 0

        }
        else if (userCourseScore > 39 && userCourseScore <= 44) {
            gradePoint = 2.00
        }
        else if (userCourseScore > 44 && userCourseScore <= 49) {
            gradePoint = 2.25
        }
        else if (userCourseScore > 49 && userCourseScore <= 54) {
            gradePoint = 2.50
        }
        else if (userCourseScore > 54 && userCourseScore <= 59) {
            gradePoint = 2.75
        }
        else if (userCourseScore > 59 && userCourseScore <= 64) {
            gradePoint = 3.00
        }
        else if (userCourseScore > 64 && userCourseScore <= 69) {
            gradePoint = 3.25
        }
        else if (userCourseScore > 69 && gpa.userCourseScore <= 74) {
            gradePoint = 3.50

        }
        else if (userCourseScore > 75 && gpa.userCourseScore <= 100) {
            gradePoint = 4.00

        }

        // Total Point
        let cuScore = Number(userCourseUnit * gradePoint)
        array3.push(cuScore)
        console.log(array3);
        let add = 0
        array3.map(e => { add += e })
        //   console.log(array3);
        let totalPoint = add
        console.log(totalPoint);
        // console.log(userCourseUnit*gradePoint);
        console.log(totalPoint / totalUnit);
        let totalGpa = totalPoint / totalUnit
        //    let seen = true
        localStorage.setItem("userGpa", totalGpa)
        console.log(totalGpa);
        course.value = ""
        courseunit.value = ""
        coursescore.value=""
    }
}

const gpaCal = () => {
    let totalGpa = localStorage.getItem("userGpa")
    displayGpa.innerHTML = `Your Total GPA is ${Number(totalGpa).toFixed(2)}`

}
const refreshHome = () => {
    localStorage.removeItem("userGpa")

}