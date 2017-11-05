import preact from 'preact';
import { ChecklistQuiz, Results, Result, Question, Answer, PercentageTotal } from '@drafty/quizbuzz';
import ResourceLoader from '@drafty/resource-loader';

const images = ResourceLoader({
  inception: 87,
  fightClub: 88,
  cars: 101,
});


export default function InteractiveQuiz() {
  return (
    <ChecklistQuiz resources={images} inverse>
      <Results displayAs={PercentageTotal}>
        <Result range="0-3" resultTitle="Not a student" lowdownImage={images.inception}>
          Are you even a student?
        </Result>
        <Result range="4-6" resultTitle="Fresher" lowdownImage="732">
          Newbie. Submit a few more assignments first?
        </Result>
        <Result range="6-9" resultTitle="Second Year" lowdownImage="732">
          Getting there! Just wait until your initial printing credits need topping up.
        </Result>
        <Result range="10" resultTitle="Graduate" lowdownImage="732">
          Definite student!
        </Result>
      </Results>

      <Question title="I have lots of money" />
      <Question title="I never question my life choices" />
      <Question title="Has learnt the true value of lactose intolerance" />
      <Question title="I know what my lectures are about" />
      <Question title="Thinking about the future is an enjoyable proccess" />
      <Question title="I have not developed a fear of printing for non enviromental reasons" />
    </ChecklistQuiz>
  )
}