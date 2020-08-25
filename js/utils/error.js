const error_ref = (text) => {
  throw new ReferenceError(`\n\n⚠️ ${text}.\n`);
};

export default error_ref;
