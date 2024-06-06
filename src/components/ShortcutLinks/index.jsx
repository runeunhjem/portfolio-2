import * as S from "./index.styled";

/**
 * ShortcutLinks component displays a set of links for navigating to different sections of the page.
 *
 * @returns {JSX.Element} The ShortcutLinks component.
 */
const ShortcutLinks = () => {
  return (
    <S.ShortcutLinks>
      <S.ShortcutLink href="#now-section">Now</S.ShortcutLink>|
      <S.ShortcutLink href="#history-section">History</S.ShortcutLink>|
      <S.ShortcutLink href="#goals-section">Goals</S.ShortcutLink>|
      <S.ShortcutLink href="#skills-section">Skills</S.ShortcutLink>|
      <S.ShortcutLink href="#follow-section">Follow</S.ShortcutLink>|
      <S.ShortcutLink href="#">Top</S.ShortcutLink>
    </S.ShortcutLinks>
  );
};

export default ShortcutLinks;
