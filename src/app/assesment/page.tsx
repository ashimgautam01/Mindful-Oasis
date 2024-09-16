"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogAction} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

interface QuestionProps {
  question: string;
  name: string;
  index: number;
  value: number;
  onChange: (index: number, value: number) => void;
}

const Question: React.FC<QuestionProps> = ({ question, name, index, value, onChange }) => (
  <div className="mb-6">
    <label className="block mb-2 text-lg font-semibold text-gray-900">{question}</label>
    <div className="flex flex-col gap-4">
      {[0, 1, 2, 3].map((val) => (
        <label key={val} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-lg hover:bg-teal-100 transition-transform transform hover:scale-105">
          <input
            type="radio"
            name={name}
            value={val}
            checked={value === val}
            onChange={() => onChange(index, val)}
            className="form-radio text-blue-600 focus:ring-2 focus:ring-blue-400"
          />
          <span className="ml-2 text-sm">{['Not at all', 'Several days', 'More than half the days', 'Nearly every day'][val]}</span>
        </label>
      ))}
    </div>
  </div>
);

const getPHQ9Feedback = (score: number | null) => {
  if (score === null) return null;
  if (score <= 4) return "Your score indicates minimal symptoms of depression. Keep up the good work!";
  if (score <= 9) return "You may be experiencing mild depression. Consider speaking with a mental health professional for further assessment.";
  if (score <= 14) return "You may be experiencing moderate depression. We recommend reaching out to a mental health provider.";
  if (score <= 19) return "You may be experiencing moderately severe depression. Please seek professional help as soon as possible.";
  return "You may be experiencing severe depression. It's important to consult with a mental health professional immediately.";
};

const getGAD7Feedback = (score: number | null) => {
  if (score === null) return null;
  if (score <= 4) return "Your score indicates minimal anxiety. Continue maintaining your mental wellness.";
  if (score <= 9) return "You may be experiencing mild anxiety. Consider strategies for managing stress and anxiety.";
  if (score <= 14) return "You may be experiencing moderate anxiety. We recommend seeking advice from a mental health professional.";
  if (score <= 19) return "You may be experiencing moderately severe anxiety. Please consult with a mental health provider.";
  return "You may be experiencing severe anxiety. It's crucial to seek professional help immediately.";
};

const Page = () => {
  const [phq9Answers, setPhq9Answers] = useState<number[]>(Array(9).fill(0));
  const [phq9Score, setPhq9Score] = useState<number | null>(null);

  const [gad7Answers, setGad7Answers] = useState<number[]>(Array(7).fill(0));
  const [gad7Score, setGad7Score] = useState<number | null>(null);

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handlePHQ9Change = (index: number, value: number) => {
    const newAnswers = [...phq9Answers];
    newAnswers[index] = value;
    setPhq9Answers(newAnswers);
  };

  const calculatePHQ9Score = () => {
    const score = phq9Answers.reduce((total, value) => total + value, 0);
    setPhq9Score(score);
  };

  const handleGAD7Change = (index: number, value: number) => {
    const newAnswers = [...gad7Answers];
    newAnswers[index] = value;
    setGad7Answers(newAnswers);
  };

  const calculateGAD7Score = () => {
    const score = gad7Answers.reduce((total, value) => total + value, 0);
    setGad7Score(score);
  };

  const phq9Feedback = getPHQ9Feedback(phq9Score);
  const gad7Feedback = getGAD7Feedback(gad7Score);

  const handleShowReport = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-100 p-6 lg:p-12">
        <header className="relative w-full h-96 mb-12">
          <Image
            src="https://img.freepik.com/free-photo/digital-lavender-natural-landscape_23-2150538365.jpg?t=st=1726462825~exp=1726466425~hmac=1db3fe67f55d0d08a380d86c0dcc6fd717eb11b33515459ab91e06a33c45dadd&w=1060"
            alt="Mental Health Header"
            fill
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white font-bold text-2xl p-4">
            <h1 className="text-4xl font-extrabold mb-4">Mental Health Self-Assessment</h1>
            <p className="text-lg">Assess your mental health with our comprehensive questionnaires.</p>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            {/* PHQ-9 Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-700">PHQ-9: Depression</h2>
              {['Little interest or pleasure in doing things.', 'Feeling down, depressed, or hopeless.', 'Trouble falling or staying asleep, or sleeping too much.', 'Feeling tired or having little energy.', 'Poor appetite or overeating.', 'Feeling bad about yourself — or that you are a failure or have let yourself or your family down.', 'Trouble concentrating on things, such as reading the newspaper or watching television.', 'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual.', 'Thoughts that you would be better off dead, or thoughts of hurting yourself in some way.'].map((question, index) => (
                <Question
                  key={index}
                  question={question}
                  name={`phq9-${index}`}
                  index={index}
                  value={phq9Answers[index]}
                  onChange={handlePHQ9Change}
                />
              ))}
              <button
                type="button"
                className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105"
                onClick={() => { calculatePHQ9Score(); handleShowReport(); }}
              >
                Calculate PHQ-9 Score
              </button>
            </div>

            {/* GAD-7 Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-700">GAD-7: Anxiety</h2>
              {['Feeling nervous, anxious, or on edge.', 'Not being able to stop or control worrying.', 'Worrying too much about different things.', 'Trouble relaxing.', 'Being so restless that it is hard to sit still.', 'Becoming easily annoyed or irritable.', 'Feeling afraid as if something awful might happen.'].map((question, index) => (
                <Question
                  key={index}
                  question={question}
                  name={`gad7-${index}`}
                  index={index}
                  value={gad7Answers[index]}
                  onChange={handleGAD7Change}
                />
              ))}
              <button
                type="button"
                className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 transition-transform transform hover:scale-105"
                onClick={() => { calculateGAD7Score(); handleShowReport(); }}
              >
                Calculate GAD-7 Score
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-center">
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://img.freepik.com/free-photo/painting-person-suffering-from-anxiety_23-2150859234.jpg?t=st=1726462001~exp=1726465601~hmac=d7d1a6762d60b0cfd167ea6d993d3f942598c9606cf9d5e0c4fa32ab26f95966&w=360"
                alt="Anxiety"
                fill
                style={{ objectFit: 'cover' }}
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://img.freepik.com/free-photo/illustration-person-anxiety_23-2150981885.jpg?t=st=1726462093~exp=1726465693~hmac=aebcecf61a19f730131d5472ac516ba3f92d7e771a8bb01e2ccae666507f555a&w=826"
                alt="Illustration of Anxiety"
                fill
                style={{ objectFit: 'cover' }}
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
          </div>
        </div>

        <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
          <AlertDialogTrigger>
            <span className="hidden">Trigger</span>
          </AlertDialogTrigger>
          <AlertDialogContent className='bg-teal-100'>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl font-bold text-center text-red-600">Personalized Report</AlertDialogTitle>
              <AlertDialogDescription>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-blue-700">PHQ-9 Feedback</h3>
                  <p className="text-lg">{phq9Feedback}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-700">GAD-7 Feedback</h3>
                  <p className="text-lg">{gad7Feedback}</p>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogAction className='bg-black hover:bg-black'>
              <Button onClick={() => setOpenDialog(false)} className="bg-black hover:bg-black text-white">
                Close
              </Button>
            </AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default Page;
