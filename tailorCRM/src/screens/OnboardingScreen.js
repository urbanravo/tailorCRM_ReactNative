import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { OnboardingSteps } from './OnboardingSteps.js';
import { PersonalDetailsForm } from './PersonalDetailsForm';
import { CompanyForm } from './CompanyForm';
import { BranchDetailsForm } from './BranchDetailsForm';
import { EmployeeDetailsForm } from './EmployeeDetailsForm';
import { SCREEN_STATES, ONBOARDING_STEPS } from '../utils/constants';

export function OnboardingScreen() {
  const [currentScreen, setCurrentScreen] = React.useState(SCREEN_STATES.PERSONAL);
  const [steps, setSteps] = React.useState(ONBOARDING_STEPS);

  const handleNext = (currentStep) => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      const updatedSteps = steps.map((step, index) => ({
        ...step,
        isComplete: index <= currentIndex,
        isCurrent: index === currentIndex + 1,
      }));
      setSteps(updatedSteps);
      setCurrentScreen(steps[currentIndex + 1].id);
    }
  };

  const handleBack = (currentStep) => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentIndex > 0) {
      const updatedSteps = steps.map((step, index) => ({
        ...step,
        isComplete: index < currentIndex - 1,
        isCurrent: index === currentIndex - 1,
      }));
      setSteps(updatedSteps);
      setCurrentScreen(steps[currentIndex - 1].id);
    }
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case SCREEN_STATES.PERSONAL:
        return <PersonalDetailsForm onNext={() => handleNext(SCREEN_STATES.PERSONAL)} />;
      case SCREEN_STATES.COMPANY:
        return (
          <CompanyForm
            onNext={() => handleNext(SCREEN_STATES.COMPANY)}
            onBack={() => handleBack(SCREEN_STATES.COMPANY)}
          />
        );
      case SCREEN_STATES.BRANCH:
        return (
          <BranchDetailsForm
            onNext={() => handleNext(SCREEN_STATES.BRANCH)}
            onBack={() => handleBack(SCREEN_STATES.BRANCH)}
          />
        );
      case SCREEN_STATES.EMPLOYEE:
        return (
          <EmployeeDetailsForm
            onBack={() => handleBack(SCREEN_STATES.EMPLOYEE)}
            onComplete={() => {}}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Onboarding</Text>
      </View>
      <OnboardingSteps steps={steps} />
      <View style={styles.screenContainer}>{renderCurrentScreen()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    maxWidth: 393,
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 22,
    alignItems: "center"
  },
  headerText: {
    color: '#313B49',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 29,
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});
