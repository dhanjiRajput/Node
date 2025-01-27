const User = require("../Models/user_model");
const bcrypt = require("bcrypt");


const createUser=async(req,res)=>{
    const {email,password}=req.body;

    const isExists = await User.findOne({ email: email });
    if (isExists) {
        return res.status(400).json({ message: "User already exists" });
    } else {
        let hash = await bcrypt.hash(password, 10);
        req.body.password = hash;
        
        let user=await User.create(req.body);
        res.status(201).json({ message: "User created successfully" });
    };
};

const viewUser = async(req, res)=>{
    const user=await User.find();
    res.status(201).json(user);
};

const assignTeacher=async(req, res)=>{
    const { teacherId, studentId } = req.body;
    const teacher = await User.findById(teacherId);
    const student = await User.findById(studentId);
  
    student.assignedTeachers = teacher._id;
    await student.save();
  
    teacher.assignedStudents.push(student._id);
    await teacher.save();
  
    res.status(200).send("Teacher assigned to student successfully.");
};

const viewAssignedStudent=async (req, res) => {
    const {id}=req.params;
    const teacher = await User.findById(id).populate("assignedStudents");
    res.status(200).json(teacher.assignedStudents);
};

const viewAssignedTeacher=async (req, res) => {
    const {id}=req.params;
    const student = await User.findById(id).populate("assignedTeachers");
    res.status(200).json(student.assignedTeachers);
};
module.exports = {createUser, viewUser,assignTeacher,viewAssignedStudent,viewAssignedTeacher};