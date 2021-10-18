import { makeObservable, observable, action } from "mobx";
import axios from "axios";


class CourseStore() {
    courses = [];

    constructor () {
        makeObservable(this, {
            courses: observable,
            createCourse: action,
            fetchCourse: action,
        });
    }

    createCourse = async (course) => {
        try {
            const response = await axios.post(
                ;
                

            )
        }
    }
            


        })


    }
    return (
        <div>
            
        </div>
    )
}

export default CourseStore
