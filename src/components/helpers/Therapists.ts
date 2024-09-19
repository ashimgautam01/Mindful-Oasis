export interface Therapist {
    id: number; // Add ID property
    name: string;
    img: string;
    rate: string;
    stars: number;
    specialty: string;
    gender: string;
    email: string; // Add email property
}

const Therapists: Therapist[] = [
    {
        id: 1,
        name: "Jane Doe",
        img: "https://img.freepik.com/free-photo/mid-shot-woman-therapist-with-clipboard_23-2148759113.jpg?w=740",
        rate: "Free",
        stars: 4,
        specialty: "Anxiety",
        gender: "Female",
        email: "jane.doe@example.com"
    },
    {
        id: 2,
        name: "John Smith",
        img: "https://img.freepik.com/free-photo/medium-shot-man-working-as-nurse_23-2151061659.jpg?w=360",
        rate: "$180/hr",
        stars: 4,
        specialty: "Depression",
        gender: "Male",
        email: "john.smith@example.com"
    },
    {
        id: 3,
        name: "Sarah Johnson",
        img: "https://img.freepik.com/free-photo/portrait-beautiful-doctor-posing_23-2148733936.jpg?w=360",
        rate: "$150/hr",
        stars: 5,
        specialty: "Trauma",
        gender: "Female",
        email: "sarah.johnson@example.com"
    },
    {
        id: 4,
        name: "Emily Clark",
        img: "https://img.freepik.com/free-photo/close-up-portrait-young-woman_23-2148299643.jpg?w=360",
        rate: "$100/hr",
        stars: 4,
        specialty: "Stress Management",
        gender: "Female",
        email: "emily.clark@example.com"
    },
    {
        id: 5,
        name: "Michael Brown",
        img: "https://img.freepik.com/free-photo/handsome-doctor-standing-with-arms-crossed_23-2148759110.jpg?w=740",
        rate: "$120/hr",
        stars: 5,
        specialty: "Family Therapy",
        gender: "Male",
        email: "michael.brown@example.com"
    },
    {
        id: 6,
        name: "Jessica Taylor",
        img: "https://img.freepik.com/free-photo/cheerful-young-woman-holding-tablet_23-2148621845.jpg?w=360",
        rate: "$110/hr",
        stars: 4,
        specialty: "Relationship Counseling",
        gender: "Female",
        email: "jessica.taylor@example.com"
    },
    {
        id: 7,
        name: "David Wilson",
        img: "https://img.freepik.com/free-photo/smiling-young-man-doctor_23-2148759031.jpg?w=360",
        rate: "$140/hr",
        stars: 5,
        specialty: "Cognitive Behavioral Therapy",
        gender: "Male",
        email: "david.wilson@example.com"
    },
    {
        id: 8,
        name: "Laura Adams",
        img: "https://img.freepik.com/free-photo/young-female-therapist-sitting-couch_23-2148252529.jpg?w=360",
        rate: "$100/hr",
        stars: 4,
        specialty: "Grief Counseling",
        gender: "Female",
        email: "laura.adams@example.com"
    },
    {
        id: 9,
        name: "James Smith",
        img: "https://img.freepik.com/free-photo/young-male-doctor-with-notepad_23-2148595044.jpg?w=360",
        rate: "$130/hr",
        stars: 5,
        specialty: "Family Counseling",
        gender: "Male",
        email: "james.smith@example.com"
    },
    {
        id: 10,
        name: "Anna Brown",
        img: "https://img.freepik.com/free-photo/beautiful-female-therapist_23-2148519923.jpg?w=360",
        rate: "$110/hr",
        stars: 4,
        specialty: "Mindfulness Therapy",
        gender: "Female",
        email: "anna.brown@example.com"
    },
    {
        id: 11,
        name: "Robert Johnson",
        img: "https://img.freepik.com/free-photo/confident-young-doctor_23-2148459068.jpg?w=360",
        rate: "$150/hr",
        stars: 5,
        specialty: "Addiction Therapy",
        gender: "Male",
        email: "robert.johnson@example.com"
    },
    {
        id: 12,
        name: "Sophia Lee",
        img: "https://img.freepik.com/free-photo/young-female-doctor_23-2148759032.jpg?w=360",
        rate: "$100/hr",
        stars: 4,
        specialty: "Play Therapy",
        gender: "Female",
        email: "sophia.lee@example.com"
    },
    {
        id: 13,
        name: "Chris Evans",
        img: "https://img.freepik.com/free-photo/young-male-therapist-holding-notes_23-2148759033.jpg?w=360",
        rate: "$120/hr",
        stars: 5,
        specialty: "Couples Therapy",
        gender: "Male",
        email: "chris.evans@example.com"
    },
    {
        id: 14,
        name: "Emily White",
        img: "https://img.freepik.com/free-photo/female-therapist-with-notebook_23-2148519556.jpg?w=360",
        rate: "$100/hr",
        stars: 4,
        specialty: "Behavioral Therapy",
        gender: "Female",
        email: "emily.white@example.com"
    },
    {
        id: 15,
        name: "John Doe",
        img: "https://img.freepik.com/free-photo/young-male-doctor-in-medical-office_23-2148553013.jpg?w=360",
        rate: "$130/hr",
        stars: 5,
        specialty: "Nutrition Counseling",
        gender: "Male",
        email: "john.doe@example.com"
    },
    {
        id: 16,
        name: "Rachel Green",
        img: "https://img.freepik.com/free-photo/therapist-with-comfortable-office_23-2148595045.jpg?w=360",
        rate: "Free",
        stars: 4,
        specialty: "Life Coaching",
        gender: "Female",
        email: "rachel.green@example.com"
    },
    {
        id: 17,
        name: "Tom Hanks",
        img: "https://img.freepik.com/free-photo/young-doctor-wearing-white-coat_23-2148595046.jpg?w=360",
        rate: "$150/hr",
        stars: 5,
        specialty: "Emotional Therapy",
        gender: "Male",
        email: "tom.hanks@example.com"
    },
    {
        id: 18,
        name: "Jennifer Aniston",
        img: "https://img.freepik.com/free-photo/portrait-female-therapist_23-2148759034.jpg?w=360",
        rate: "$110/hr",
        stars: 4,
        specialty: "Conflict Resolution",
        gender: "Female",
        email: "jennifer.aniston@example.com"
    },
    {
        id: 19,
        name: "Bruce Wayne",
        img: "https://img.freepik.com/free-photo/young-male-therapist-standing_23-2148759035.jpg?w=360",
        rate: "$130/hr",
        stars: 5,
        specialty: "Holistic Therapy",
        gender: "Male",
        email: "bruce.wayne@example.com"
    },
    {
        id: 20,
        name: "Lara Croft",
        img: "https://img.freepik.com/free-photo/young-female-doctor-office_23-2148759036.jpg?w=360",
        rate: "$120/hr",
        stars: 4,
        specialty: "Sexual Therapy",
        gender: "Female",
        email: "lara.croft@example.com"
    },
    {
        id: 21,
        name: "Peter Parker",
        img: "https://img.freepik.com/free-photo/smiling-male-therapist_23-2148759037.jpg?w=360",
        rate: "$105/hr",
        stars: 5,
        specialty: "Anxiety Management",
        gender: "Male",
        email: "peter.parker@example.com"
    },
    {
        id: 22,
        name: "Natasha Romanoff",
        img: "https://img.freepik.com/free-photo/female-therapist-with-notepad_23-2148759038.jpg?w=360",
        rate: "$100/hr",
        stars: 4,
        specialty: "Trauma Counseling",
        gender: "Female",
        email: "natasha.romanoff@example.com"
    },
    {
        id: 23,
        name: "Clark Kent",
        img: "https://img.freepik.com/free-photo/male-therapist-in-office_23-2148759040.jpg?w=360",
        rate: "$150/hr",
        stars: 5,
        specialty: "Assertiveness Training",
        gender: "Male",
        email: "clark.kent@example.com"
    },
    {
        id: 24,
        name: "Diana Prince",
        img: "https://img.freepik.com/free-photo/female-doctor-sitting-office_23-2148759041.jpg?w=360",
        rate: "$100/hr",
        stars: 4,
        specialty: "PTSD Counseling",
        gender: "Female",
        email: "diana.prince@example.com"
    },
    {
        id: 25,
        name: "Stephen Strange",
        img: "https://img.freepik.com/free-photo/male-doctor-consultation_23-2148759042.jpg?w=360",
        rate: "$130/hr",
        stars: 5,
        specialty: "Crisis Counseling",
        gender: "Male",
        email: "stephen.strange@example.com"
    },
    {
        id: 26,
        name: "Wanda Maximoff",
        img: "https://img.freepik.com/free-photo/female-therapist-with-comfortable-office_23-2148759043.jpg?w=360",
        rate: "$120/hr",
        stars: 4,
        specialty: "Couples Therapy",
        gender: "Female",
        email: "wanda.maximoff@example.com"
    },
    {
        id: 27,
        name: "Tony Stark",
        img: "https://img.freepik.com/free-photo/male-therapist-in-office_23-2148759044.jpg?w=360",
        rate: "$150/hr",
        stars: 5,
        specialty: "Motivational Interviewing",
        gender: "Male",
        email: "tony.stark@example.com"
    },
    {
        id: 28,
        name: "Peter Parker",
        img: "https://img.freepik.com/free-photo/female-therapist-in-office_23-2148759045.jpg?w=360",
        rate: "$115/hr",
        stars: 4,
        specialty: "Social Skills Training",
        gender: "Female",
        email: "peter.parker@example.com"
    }
];

export default Therapists;
