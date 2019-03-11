JavaScript React State Hook "useEffect" Demo
=================================

使用`useEffect`，可以在每次render前后都执行一些代码。

它相当于是`componentDidMount/componentDidUpdate/componentWillUnmount`等方法的某种组合，
需要强调的是，`useEffect`，是在“每一次”render前后执行。

如果`useEffect`中的函数返回了一个函数，则这个函数将在render后执行，作为clean up。

如果希望对`useEffect`的执行进行一些优化，比如只在需要的时候执行，可以在后面传入一个数组，监视某些值（参看另一个demo）

```
npm install
npm run demo
```
