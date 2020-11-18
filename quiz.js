var Questions = { // Nov 10 6:15 pm
    "qArray": [{
            "question": "Which of the following is not a Shell ?",
            "option1": "Bat",
            "option2": "Ksh",
            "option3": "Bourne",
            "option4": "Bash",
            "correctAns": "Bat"
        },

        {
            "question": "How to display all array elements at once?",
            "option1": "echo ${array[@]}",
            "option2": "echo ${array[#]}",
            "option3": "echo ${array[]}",
            "option4": "echo array",
            "correctAns": "echo ${array[@]}"
        },

        {
            "question": "How to define functions in shell scripting?",
            "option1": "int function test(){ Commands return result; }",
            "option2": "Begin function test Commands End;",
            "option3": "function test(){ Commands }",
            "option4": "start test(){ Commands return $TRUE }",
            "correctAns": "function test(){ Commands }"
        },

        {
            "question": "How to get input from the terminal for shell script?",
            "option1": "read command",
            "option2": "scan command",
            "option3": "None",
            "option4": "input command",
            "correctAns": "read command"
        },

        {
            "question": "Which of the below commands NOT used to view the contents of a file?",
            "option1": "Ls command",
            "option2": "Cat command",
            "option3": "More command",
            "option4": "Disp command",
            "correctAns": "Disp command"
        },
        {
            "question": "What does the command ls do?",
            "option1": "Shows a calendar",
            "option2": "Display of files and folders, present in the folder where you are",
            "option3": "Opening a file",
            "option4": "Display of the contents of a file",
            "correctAns": "Display of files and folders, present in the folder where you are"
        },
        {
            "question": "How do you delete a file?",
            "option1": "rm filename",
            "option2": "dl filename",
            "option3": "touch filename",
            "option4": "less filename",
            "correctAns": "rm filename"
        },
        {
            "question": "In Shell scripting what is $*?",
            "option1": "Its mainly used for showing up all parameters. This show few parameter values passed in shell script.",
            "option2": "Its mainly used for showing up all parameters. This show all values returned.",
            "option3": "Its mainly used for showing up all parameters. This show all parameter values passed in shell script.",
            "option4": "None of the above",
            "correctAns": "Its mainly used for showing up all parameters. This show all parameter values passed in shell script."
        },
        {
            "question": "To run the script, we should make it executable first by using :",
            "option1": "chmod +x",
            "option2": "chmod +r",
            "option3": "chmod +w",
            "option4": "chmod +rwx",
            "correctAns": "chmod +x"
        },
        {
            "question": `add () {
                a=5 
                result=$(( $1 + $2 ))  
                result=result-$a  
              }  
              add 3 4  
              echo $result  `,
            "option1": "12",
            "option2": "7",
            "option3": "1",
            "option4": "2",
            "correctAns": "2"
        },
        {
            "question": "How will you list only the empty lines in a file (using grep)?",
            "option1": "Grep “$^” filename.txt",
            "option2": "Grep “$” filename.txt",
            "option3": "Grep “^$” filename.txt",
            "option4": "Grep $^ filename.txt",
            "correctAns": "Grep “^$” filename.txt"
        },
        {
            "question": "How will you find the 99th line of a file using only tail and head command?",
            "option1": "Tail +99 file1|head +1",
            "option2": "Tail -99 file1|head -1",
            "option3": "Tail -99 file1|head +1",
            "option4": "Tail +99 file1|head -1",
            "correctAns": "Tail +99 file1|head -1"
        },
        {
            "question": "Linux has how many standard streams?",
            "option1": "2",
            "option2": "3",
            "option3": "4",
            "option4": "5",
            "correctAns": "3"
        },
        {
            "question": "Which of the following commands is used to duplicate each line in a file?",
            "option1": "sed 'f' < filename",
            "option2": "sed 'p' < filename",
            "option3": "sed 'p' > filename",
            "option4": "sed 'p' -a < filename",
            "correctAns": "sed 'p' < filename"
        },
        {
            "question": "What type of block contains all the information about a file?",
            "option1": "Boot block",
            "option2": "Super block",
            "option3": "Inode block",
            "option4": "Command block",
            "correctAns": "Inode block"
        }
    ]
};