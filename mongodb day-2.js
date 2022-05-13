
// 1.Find all the topics and tasks which are thought in the month of October
db.topics.aggregate([
            
            {$lookup:{
            from: 'tasks',
            localField: 'topicId',
            foreignField: 'topicId',
            as:'tasks'}},
            {
                $match:{month: 'october'}
            },
            
            {
                $match: {
                    'tasks':{$ne: []}
                }
            }
])

// 2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drives.find({$and: [{interview_date:{$gte: ('15-10-2020')}}, {interview_date:{$lte: ('31-10-2020')}}]});

// 3. Find all the company drives and students who are appeared for the placement.

db.company_drives.find({});

// 4. Find the number of problems solved by the user in codekata

db.codekata.aggregate([{
    $group: {              
        _id: "$id",
        no_of_problems_solved: {"$sum": "$no_of_questions_solved"}
    }
}]);

// 5. Find all the mentors with who has the mentee's count more than 15

db.mentors.aggregate([{
    $addFields: {mentees_per_mentor: {$sum: "$mentees"}}
}, {
    $match: {mentees_per_mentor: {$gte:15}}
}])

// 6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.tasks.find({$or:[{date_of_submission:{$lt:('15-10-2020')}}, {date_of_submission: {$gt:('31-10-2020')}}]});
        
    
   




















