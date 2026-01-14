import { useAppearance } from '@/hooks/use-appearance';
import { useMemo } from 'react';
import * as SurveyTheme from 'survey-core/themes';
import { registerCreatorTheme } from 'survey-creator-core';
import SurveyCreatorTheme from 'survey-creator-core/themes';

// import 'survey-creator-core/survey-creator-core-dark.min.css';
// import 'survey-creator-core/survey-creator-core.min.css';

export function loadThemes() {
  // Add predefined Survey Creator UI themes
  registerCreatorTheme(SurveyCreatorTheme.DefaultDark);
}

export function useSurveyThemes() {
  const { appearance } = useAppearance();

  return useMemo(() => {
    const theme =
      appearance == 'dark'
        ? SurveyTheme.SharpDarkPanelless
        : SurveyTheme.SharpLightPanelless;

    const styles = {
      ...theme.cssVariables,
      zoom: 0.9,
    };

    return {
      theme,
      styles,
    };
  }, [appearance]);
}
