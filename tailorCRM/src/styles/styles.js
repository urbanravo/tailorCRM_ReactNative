import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
    maxWidth: 393,
  },
  headerContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#313B49',
    lineHeight: 28.8,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    width: '100%',
  },
  stepItem: {
    alignItems: 'center',
    flex: 1,
  },
  stepCircle: {
    borderRadius: 11,
  },
  activeStepCircle: {
    width: 22,
    height: 22,
    borderWidth: 4,
    borderColor: '#FF5A5F',
  },
  inactiveStepCircle: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#EBEEF3',
  },
  stepText: {
    marginTop: 8,
    fontSize: 16,
    color: '#627D98',
    textAlign: 'center',
  },
  activeStepText: {
    color: '#FF5A5F',
    fontWeight: '600',
  },
  formContainer: {
    flex: 1,
    width: '100%',
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#627D98',
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ADBCCC',
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    color: '#8198AF',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ADBCCC',
    borderRadius: 8,
    padding: 8,
  },
  dateInput: {
    width: 40,
    textAlign: 'center',
    fontSize: 16,
    color: '#8198AF',
  },
  dateSeparator: {
    color: '#313B49',
    marginHorizontal: 4,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  genderOption: {
    flex: 1,
    marginHorizontal: 4,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#EBEEF3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  radioOuterSelected: {
    borderColor: '#FF5A5F',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF5A5F',
  },
  genderText: {
    fontSize: 16,
    color: '#627D98',
  },
  genderTextSelected: {
    color: '#313B49',
    fontWeight: '700',
  },
  nextButton: {
    backgroundColor: '#FF5A5F',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});