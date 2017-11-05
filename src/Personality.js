import preact from 'preact';
import { PersonalityQuiz, Results, Result, Question, Answer } from '@drafty/quizbuzz';
import ResourceLoader from '@drafty/resource-loader';

const images = ResourceLoader({
  inception: 87,
  fightClub: 88,
  cars: 101,
});


export default function InteractiveQuiz() {
  return (
    <PersonalityQuiz resources={images}>
      <Results>
        <Result name="mark" resultTitle="Mark" lowdownImage={images.inception}>
          You got Mark. You're half way through finishing Business Secrets of Croydon. Don't forg...
        </Result>
        <Result name="jez" resultTitle="Jez" lowdownImage="732">
          Relax man! You're Jez! Kicking back, making big beats and getting high.
        </Result>
        <Result name="dobby" resultTitle="Dobby" lowdownImage="732">
          Freak.
        </Result>
      </Results>

      <Question title="Where would you sooner go?">
        <Answer result="mark">Around the head with Mr Potato Head</Answer>
        <Answer result="dobby">Darty</Answer>
        <Answer result="jez">Festivius</Answer>
      </Question>

      <Question title="Best night in?">
        <Answer result="dobby">Curry and Prison Break</Answer>
        <Answer result="mark">Ironic golf</Answer>
        <Answer result="jez">Three lays in one night</Answer>
      </Question>

      <Question title="Your biggest personality flaw?">
        <Answer result="mark">An arsehole</Answer>
        <Answer result="jez">A layabout</Answer>
        <Answer result="dobby">Freak</Answer>
      </Question>
    </PersonalityQuiz>
  )
}