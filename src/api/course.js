import {get} from './axios';

const mockImage = 'https://sdtimes.com/wp-content/uploads/2018/03/jW4dnFtA_400x400.jpg';

export const fetchCourses = () => {
    const url = '/courses';

    return get(url).then(res => ({
        courses: res.data.data.map(course => ({ ...course, courseImage: mockImage })),

    }));
};