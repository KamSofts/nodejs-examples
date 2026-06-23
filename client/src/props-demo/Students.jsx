import Student from './Student'

const Students = () => {
    return (<div>
        <Student name="Ram" age={14} isStudent={true} />
        <Student name="Krishna" age={19} isStudent={false} />
        <Student name={10} age="Test123" isStudent="Test" />
        <Student name="test" age="test" isStudent="test" />
    </div>);
};

export default Students;
