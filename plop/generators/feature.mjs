const requireField = (fieldName) => (value) => {
  if (String(value).length === 0) {
    return `${fieldName} is required`;
  }

  return true;
};

export const feature = {
  description: 'Create a new feature',
  prompts: [
    {
      type: 'input',
      name: 'feature_name',
      message: 'Enter the name of the feature',
      validate: requireField('feature_name'),
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/features/{{feature_name}}/api/index.ts',
      templateFile: './plop/templates/emptyIndex.hbs',
    },
    {
      type: 'add',
      path: 'src/features/{{feature_name}}/assets/.gitkeep',
    },
    {
      type: 'add',
      path: 'src/features/{{feature_name}}/components/index.ts',
      templateFile: './plop/templates/emptyIndex.hbs',
    },
    {
      type: 'add',
      path: 'src/features/{{feature_name}}/hooks/index.ts',
      templateFile: './plop/templates/emptyIndex.hbs',
    },
    {
      type: 'add',
      path: 'src/features/{{feature_name}}/routes/index.ts',
      templateFile: './plop/templates/emptyIndex.hbs',
    },
    {
      type: 'add',
      path: 'src/features/{{feature_name}}/stores/index.ts',
      templateFile: './plop/templates/emptyIndex.hbs',
    },
    {
      type: 'add',
      path: 'src/features/{{feature_name}}/types/index.ts',
      templateFile: './plop/templates/emptyIndex.hbs',
    },
    {
      type: 'add',
      path: 'src/features/{{feature_name}}/utils/index.ts',
      templateFile: './plop/templates/emptyIndex.hbs',
    },
    {
      type: 'add',
      path: 'src/features/{{feature_name}}/index.ts',
      templateFile: './plop/templates/emptyIndex.hbs',
    },
  ],
};
