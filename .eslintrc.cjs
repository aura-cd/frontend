module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    /**
     * React
     */
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],

    /**
     * 緩和
     */
    /* プロパティの展開 */
    'react/jsx-props-no-spreading': 'off',
    /* default値の設定 */
    'react/require-default-props': 'off',
    /* 空のinterface */
    '@typescript-eslint/no-empty-interface': 'off',
    /* 型推論が可能な場合の型の省略 */
    '@typescript-eslint/no-inferrable-types': 'off',
    /* TSのルールでエラーにするため */
    'no-shadow': 'off',
    /* namedエクスポート */
    'import/prefer-default-export': 'off',
    /* TSでチェックするため */
    'react/no-unknown-property': 'off',

    /**
     * 厳格
     */
    /* 不使用の変数 */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '_',
        ignoreRestSiblings: false,
        varsIgnorePattern: '_|React|createElement',
      },
    ],
    /* 関数コンポーネントの形式の指定 */
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    /* 短絡評価の許可 */
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    /* 外部スコープに存在する変数を内側のスコープで再宣言することを禁止 */
    '@typescript-eslint/no-shadow': ['error'],
  },
};
