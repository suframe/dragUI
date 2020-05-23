import Vue from 'vue'
import Vuex from 'vuex'
import currentCheckAttr from './modules/currentCheckAttr'
import euEditTool from './modules/euEditTool'
import project from './modules/project'
import patternComponents from './modules/patternComponents'
import {getCachesComponentsInfo,cachesComponentsInfo} from 'common/js/localStore'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        showComponentPreview: false, // 组件预览
        componentPreviewName: '', // 组件预览的名字
        myComponentPreviewData: {}, // 自定义组件的数据
        pattern: 'component', // 编辑的模式，页面模式和组件模式 [page,component]
        list: [], //好像没用
        deleteGroupName: 'layouts', // 拖拽到删除图标时的分组变量。
        iflexGroup: 'components', // 判断拖拽分组，用于限制元素只能在layouts里
        showFlexDraggalbeHandle: true, // 控制布局锁定
        preview: true, // 预览开关
        phoneSize: 100, // 页面大小缩放
        rightAideTabActiveName: 'four', // 右侧 tab 项变量
        componentsInfo : { // 组件的基本信息
            list: [
                {name:'活动',id: 900, componentName: 'activity',iStyle:{},iClass: [],propsValue: [], upxSwitch: true},
                {name:'分类',id: 901, componentName: 'cate',iStyle:{},iClass: [],propsValue: [], upxSwitch: true},
                {name:'商品列表',id: 902, componentName: 'goodsList',iStyle:{},iClass: [],propsValue: [], upxSwitch: true},
                {name:'新品',id: 903, componentName: 'goodsNew',iStyle:{},iClass: [],propsValue: [], upxSwitch: true},
                {name:'秒杀列表',id: 904, componentName: 'ms',iStyle:{},iClass: [],propsValue: [], upxSwitch: true},
                {name:'幻灯片',id: 905, componentName: 'scroll',iStyle:{},iClass: [],propsValue: [], upxSwitch: true},
            ]
        }
    },
    mutations: {
        updataComponentsInfo(state,{key,name,propsValue}){
            let list = state.componentsInfo[key]
            for (let i = 0; i < list.length; i++) {
                let item = list[i]
                if (item.name === name){
                    item.propsValue = propsValue
                    return
                }
            }
        },
        initComponentsInfo(state,data){
            state.componentsInfo = data
        },
        setRightAideTabActiveName(state,data){
            state.rightAideTabActiveName = data.rightAideTabActiveName
        },
        setPattern(state,data){
            state.pattern = data.pattern
        },
        setPhoneSize(state,data){
            state.phoneSize = data.phoneSize
        },
        setPreview(state,data){
            state.preview = data.preview
        },
        setGlobalList(state,data){
            state.list = data.list
        },
        setShowFlexDraggalbeHandle(state,data){
            state.showFlexDraggalbeHandle = data.showFlexDraggalbeHandle
        },
        setIflexGroup(state,data){
            state.iflexGroup = data.iflexGroup
        },
        setDeleteGroupName(state,data){
            state.deleteGroupName = data.deleteGroupName
        },
        setShowComponentPreview(state,{showComponentPreview}){
            state.showComponentPreview = showComponentPreview
        },
        setComponentPreviewName(state,{componentPreviewName}){
            state.componentPreviewName = componentPreviewName
        },
        setMyComponentPreviewData(state,{myComponentPreviewData}){
            state.myComponentPreviewData = myComponentPreviewData
        }
    },

    getters: {
    },

    actions: {
        // 更新組件基本信息
        updataComponentsInfo({commit,rootState,state}){
            let item = rootState.currentCheckAttr.item
            let {id,name,propsValue} = item
            let key = 'list'
            if (id > 999){
                key = 'colorUiList'
            }
            if (id > 1999){
                key = 'formList'
            }
            commit('updataComponentsInfo',{
                key,
                name:name,
                propsValue:propsValue})
            cachesComponentsInfo(state.componentsInfo)
        },
        // 初始化組件基本信息，從本地提取
        initComponentsInfo({commit}){
            let data = getCachesComponentsInfo()
            if (data){
                commit('initComponentsInfo',data)
            }
        },
        /**
         * 初始化缓存数据
         * @param dispatch
         */
        initData({dispatch}){
            dispatch('initProject')
            dispatch('initCustomClass')
            dispatch('initFromStyleList')
            dispatch('initComponentsList')
            dispatch('initComponentsInfo')
        }
    },

    modules:{
        currentCheckAttr,
        euEditTool,
        project,
        patternComponents
    }
})

export default store
