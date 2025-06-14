class Student:
    student_dictionary = {}
    school_name = 'j spider'

    def __init__(self):
        self.roll_no = input("\n\t Enter the Student roll number: ")
        self.name = input("\t Enter the student name: ")
        self.phone_number = input("\t Enter the student phone number: ")
        self.address = input("\t Enter the student address: ")
        student_class = input("\t Enter the Student class [Ex: 1 2 3 4 5 6 7 8 9 10]: ")

        if student_class in StudentClass.classes:
            StudentClass.classes[student_class].studentList.append(self)
        else:
            new_class = StudentClass(student_class)
            new_class.studentList.append(self)
            StudentClass.classes[student_class] = new_class
        
        self.student_class = StudentClass.classes[student_class]
        print("\n Student added successfully")
        self.get_student()

    def get_student(self):
        print("\n-- Student Details --\n")
        print(f"\tRoll number: {self.roll_no}")
        print(f"\tName: {self.name}")
        print(f"\tPhone number: {self.phone_number}")
        print(f"\tAddress: {self.address}")
        print(f"\tClass: {self.student_class.name}")
        print(f"\tSchool name: {self.school_name}")

    def update_student(self):
        print("\t\tSelect option to update student details\n")
        print("\t\t\t1) Change Student Name") 
        print("\t\t\t2) Change Student Phone Number") 
        print("\t\t\t3) Change Student Address") 
        print("\t\t\t4) Change Student Class\n")
        
        option = input("\t\t Enter any above option: ")
        print()

        if option in ['1', '2', '3', '4']:
            if option == '1':
                self.name = input("\t\t Enter the Student New Name: ")
                print("\n\t\tStudent Name changed successfully")
            elif option == '2':
                self.phone_number = input("\t\t Enter the Student New Phone Number: ")
                print("\n\t\tStudent Phone Number changed successfully")
            elif option == '3':
                self.address = input("\t\t Enter the Student New Address: ")
                print("\n\t\tStudent Address changed successfully")
            else:
                new_class = input("\t\t Enter the Student New Class name: ")
                self.student_class.studentList.remove(self)
                if new_class in StudentClass.classes:
                    self.student_class = StudentClass.classes[new_class]
                else:
                    self.student_class = StudentClass(new_class)
                self.student_class.studentList.append(self)
                print("\n\t\tStudent Class Changed Successfully\n")
            self.get_student()
        else:
            print("\n\t\tInvalid option\n")

    @classmethod
    def update_school_name(cls, new_school_name):
        cls.school_name = new_school_name 

    @classmethod
    def get_total_student_count(cls):
        return len(cls.student_dictionary)


class StudentClass:
    classes = {}

    def __init__(self, name):
        self.name = name
        StudentClass.classes[name] = self
        self.studentList = []

    @staticmethod
    def main():
        print(f"--- Welcome To {Student.school_name} School ---\n")
        
        while True:
            print("\t1) Get Student Details")
            print("\t2) Add New Student")
            print("\t3) Remove Student") 
            print("\t4) Update Student Details") 
            print("\t5) Update School Name") 
            print("\t6) Get Number of Students In School") 
            print("\t7) Get All Student Details") 
            print("\t8) Get Student Details by Class")
            option = input('Enter Any Above Given Option: ')
            print()

            if option == '1':
                roll_no = input("\t Enter the Roll Number of a Student: ")
                student = Student.student_dictionary.get(roll_no)
                if student:
                    student.get_student()
                else:
                    print('\t\tYou have Entered the wrong roll number') 
            elif option == '2':
                new_student = Student()
                Student.student_dictionary[new_student.roll_no] = new_student
                print("\t\t Student details Added scuccessfylly")
            elif option == '3':
                roll_no = input("\t Enter the Roll Number of a Student: ")
                student = Student.student_dictionary.pop(roll_no, None)
                if student:
                    student.student_class.studentList.remove(student)
                    print(f"\t\tStudent {roll_no} Deleted Successfully")
                else:
                    print("\t\tStudent not found")
            elif option == '4':
                roll_no = input('Enter the Roll Number: ')
                student = Student.student_dictionary.get(roll_no)
                if student:
                    student.update_student()
                    print("Student class updated successfully")
                else:
                    print('\n\t\tYou have entered the wrong roll number')
            elif option == '5':
                new_school_name = input('\tEnter the New School Name: ')
                Student.update_school_name(new_school_name)
                print('School Name Changed Successfully')
            elif option == '6':
                print('Total Number of Students in School:', Student.get_total_student_count())
            elif option == '7':
                print('Total Number of Students in School:', Student.get_total_student_count())
                print('\nTotal Student List With Details\n')
                for sNo, student in enumerate(Student.student_dictionary.values()):
                    print(f'Student {sNo + 1}:')
                    student.get_student()
                    print()
            elif option == '8':
                class_name = input('\tEnter the class Name: ')
                student_class = StudentClass.classes.get(class_name)
                if student_class:
                    print(f"\nTotal Number of Students in class {student_class.name}: {len(student_class.studentList)}")
                    for sNo, student in enumerate(student_class.studentList):
                        print(f'Student {sNo + 1}:')
                        student.get_student()
                        print()
                else:
                    print("\nYou entered a wrong class name or there are no students in that class.")
            else:
                print("\nInvalid option, please try again.")

if __name__ == '__main__':
    StudentClass.main()
