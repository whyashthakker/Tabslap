import React from 'react'
import CommentGenerator from './generator/generator';
import CommentGeneratorIntroduction from './fancy/generator-intros';
import CommentGeneratorHowToUse from './fancy/how-to-use';
import CommentGeneratorFAQ from './fancy/faq';

interface MainCommentGeneratorProps {
    platformName: string;
}

const MainCommentGenerator: React.FC<MainCommentGeneratorProps> = ({ platformName }) => {
  return (
    <div>
        <CommentGenerator defaultPlatform={platformName} title={`${platformName} Comment Generator`} />
        <CommentGeneratorIntroduction platformName={platformName} />
        <CommentGeneratorHowToUse platformName={platformName} />
        <CommentGeneratorFAQ platformName={platformName} />
    </div>
  )
}

export default MainCommentGenerator