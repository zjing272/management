<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="user-card">
          <div class="user-info">
            <img src="../assets/img/user.png" alt="" class="user-img">
            <div class="user-info-content">
              <div class="user-info-name">{{userData.name}}</div>
              <div>{{userData.role}}</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登陆时间：
            <span>2019-11-01</span>
          </div>
          <div class="user-info-list">
            上次登录地点：
            <span>东莞</span>
          </div>
        </el-card>
        <el-card class="lang-card">
          <template #header>
            <div>语言详情</div>
          </template>
          <div class="lang-radio" v-for="item in languageInfo" :key="item.name">
            <div>{{item.name}}</div>
            <el-progress :percentage="item.percentage" :color="item.color"></el-progress>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col :span="24">
            <el-row :gutter="20">
              <el-col :span="8" v-for="item in websiteInfo" :key="item.name">
                  <div class="website-content">
                    <i :class="item.icon" :style="{backgroundColor: item.textColor}"></i>
                    <div class="website-number">
                      <div :style="{color: item.textColor}">{{item.number}}</div>
                      <div class="number-name">{{item.name}}</div>
                    </div>
                  </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-card class="todo-card">
            <template #header>
              <span class="todo-title">待办事项</span>
              <button class="todo-btn">添加</button>
            </template>
            <el-table :show-header="false" :data="todoList" style="width: 100%" :cell-style="{padding: '4px 0'}">
              <el-table-column width="40">
                <template #default="scope">
                  <el-checkbox v-model="scope.row.checked"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column>
                <template #default="scope">
                  <div class="todo-item" :class="{'todo-list-del': scope.row.checked}">{{scope.row.todo}}</div>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-row>
     </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="draw-card">
          <div id="bar" style="width: 100%;height: 280px"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="draw-card">
          <div id="line" style="width: 100%;height: 280px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      // 用户登录数据
      userData: {
        name: undefined,
        role: undefined
      },
      // 语言详情 数据
      languageInfo: [
        {
          name: 'Vue',
          percentage: 71.3,
          color: '#42B983',
        },
        {
          name: 'JavaScript',
          percentage: 24.1,
          color: '#F1E05A',
        },
        {
          name: 'CSS',
          percentage: 13.7,
          color: '#409EFF',
        },
        {
          name: 'HTML',
          percentage: 5.9,
          color: '#F56C6C',
        },

      ],
      // 网站信息 数据
      websiteInfo: [
        {
          icon: "el-icon-user-solid",
          number: 1234,
          name: '用户访问量',
          textColor: '#2D8CF0'
        },
        {
          icon: "el-icon-message-solid",
          number: 321,
          name: '系统消息',
          textColor: '#64D572'
        },
        {
          icon: "el-icon-s-goods",
          number: 5000,
          name: '数量',
          textColor: '#F25E43'
        }
      ],
      todoList: [
        {
          checked: true,
          todo: '今天要修复2个bug'
        },
        {
          checked: false,
          todo: '复习webpack的基本配置'
        },
        {
          checked: false,
          todo: '看Vue官方文档'
        },
        {
          checked: false,
          todo: 'VueX中的知识点复习'
        },
        {
          checked: true,
          todo: 'ES6的相关知识点'
        },
        {
          checked: false,
          todo: 'JS数组的方法中，哪些不会改变原来的数组'
        }
      ],
      // 柱状图数据
      barOptions: {
        title: {
          text: '最近一周各品类销售图',
          textStyle: {
            fontSize: 20
          },
          left: 'center'
        },
        // 设置提示框
        // tooltip: {
        //   // 触发条件
        //   trigger: 'axis',
        //   axisPointer: {
        //     type: 'shadow'
        //   }
        // },
        // 图例
        legend: {
          left: 40,
          top: 25,
          height: 50,
          // padding: [40, 0, 10, 0],
          data: ['家电', '百货', '食品']
        },
        grid: {
          top: 70,
          bottom: 30
        },
        xAxis: [{
          show: true,
          type: 'category',
          // axisTick: { show: false },
          axisLine: {
            show: true,
            onZero: true
          },
          axisTick: {
            show: false
          },
          data: ['周一', '周二', '周三', '周四', '周五']
        }],
        yAxis: [{
          show: true,
          splitLine: {
            // 不显示y轴的网格线
            show: false
          },
          type: 'value',
          // 强制设定间隔
          interval: 60,
          axisLine: {
            show: true,
            onZero: true
          }
        }],
        series: [
          {
            name: '家电',
            type: 'bar',
            label: {
              show: true,
              position: "top",
              color: "#5470C6"
            },
            itemStyle: {
              // 设置柱体的颜色
              color: "#5470C6"
            },
            data: [234, 278, 270, 190, 230],
            emphasis: {
              focus: "series",
              blurScope: "global"
            }
          },
          {
            name: '百货',
            type: 'bar',
            label: {
              show: true,
              position: "top",
              color: "#91CC75"
            },
            itemStyle: {
              color: "#91CC75"
            },
            data: [220, 182, 191, 234, 290],
            emphasis: {
              focus: "series",
              blurScope: "global"
            }
          },
          {
            name: '食品',
            type: 'bar',
            label: {
              show: true,
              position: "top",
              color: "#FAC858"
            },
            itemStyle: {
              color: "#FAC858"
            },
            data: [150, 232, 201, 154, 190],
            emphasis: {
              focus: "series",
              blurScope: "global"
            }
          }
        ]
      },
      // 折线图数据
      lineOptions: {
        title: {
          text: '最近几月各品类销售图',
          textStyle: {
            fontSize: 20
          },
          left: 'center'
        },
        // 图例
        legend: {
          left: 40,
          top: 25,
          height: 50,
          data: ['家电', '百货', '食品']
        },
        grid: {
          top: 70,
          bottom: 30
        },
        xAxis: [{
          show: true,
          type: 'category',
          axisLine: {
            show: true,
            onZero: true
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true
          },
          data: ['6月', '7月', '8月', '9月', '10月']
        }],
        yAxis: [{
          show: true,
          splitLine: {
            show: true
          },
          type: 'value',
          // 强制设定间隔
          interval: 60,
          axisLine: {
            show: true,
            onZero: true
          },
          min: 60,
          max: 360
        }],
        series: [
          {
            name: '家电',
            type: 'line',
            label: {
              show: true,
              position: "top",
              color: "#5470C6"
            },
            itemStyle: {
              // 设置柱体的颜色
              color: "#5470C6"
            },
            data: [234, 278, 270, 190, 230],
            emphasis: {
              focus: "series",
              blurScope: "global"
            },
            smooth: true
          },
          {
            name: '百货',
            type: 'line',
            label: {
              show: true,
              position: "top",
              color: "#91CC75"
            },
            itemStyle: {
              color: "#91CC75"
            },
            data: [220, 182, 191, 234, 290],
            emphasis: {
              focus: "series",
              blurScope: "global"
            },
            smooth: true
          },
          {
            name: '食品',
            type: 'line',
            label: {
              show: true,
              position: "top",
              color: "#FAC858"
            },
            itemStyle: {
              color: "#FAC858"
            },
            data: [150, 232, 201, 154, 190],
            emphasis: {
              focus: "series",
              blurScope: "global"
            },
            smooth: true
          }
        ]
      }
    }
  },
  methods: {
    drawBar() {
      const myChart = this.$echarts.init(document.getElementById('bar'));
      myChart.setOption(this.barOptions)
    },
    drawLine() {
      //  基于准备好的DOM初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('line'));
      //  绘制图表
      myChart.setOption(this.lineOptions)
    },
  },
  created() {
    // 判断用户，更改用户数据显示
    this.userData.name = localStorage.getItem('ms_username');
    this.userData.role = this.userData.name === "admin" ? "超级管理员" : "普通用户";
  },
  mounted() {
    //实例化echarts对象（确保DOM元素已经挂载到页面中）
    // 柱状图
    this.drawBar()
    // 折线图
    this.drawLine()
  }
}
</script>

<style scoped>
/* 显示用户信息 */
.user-card {
  width: 100%;
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
}
.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #aaa;
}
.user-img {
  height: 120px;
  width: 120px;
  border-radius: 50%;
}
.user-info-content {
  flex-grow: 1;
  padding-left: 50px;
}
.user-info-name {
  font-size: 30px;
  color: #222;
}
.user-info-list {
  line-height: 25px;
}
.user-info-list span{
  padding-left: 65px;
}

/* 显示语言占比 */
.lang-card {
  padding-bottom: 20px;
}

/* 显示访问量 */
.website-content {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
}
.el-icon-user-solid,
.el-icon-message-solid,
.el-icon-s-goods {
  width: 100px;
  height: 100px;
  font-size: 50px;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 100px;
}
.website-number {
  padding-left: 30px;
  font-size: 30px;
  font-weight: 700;
}
.number-name {
  font-size: 14px;
  color: #999;
  font-weight: 400;
}

/* 待办事项 */
.todo-card {
  position: relative;
  margin-top: 20px;
  padding-bottom: 16px;
  width: 100%;
  height: 388px;
}
.todo-btn {
  position: absolute;
  right: 20px;
  color: #20a0ff;
  background-color: #fff;
}
.todo-item {
  font-size: 14px;
}
.todo-list-del {
  text-decoration: line-through;
  color: #99a9bf;
}
/* active选择活动链接，并设置其样式*/
.todo-btn:active {
  color: #242F42;
}

/* echarts图 */
.draw-card {
  margin: 20px 0 30px 0;
}

</style>
