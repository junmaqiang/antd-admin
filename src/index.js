import './index.html'
import dva from 'dva'

// 1. Initialize
const app = dva()

// 2. Model
app.model(require('./models/app'))
app.model(require('./models/users'))
app.model(require('./models/dashboard'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
