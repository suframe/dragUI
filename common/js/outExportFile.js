import ejs from 'ejs'
import FileSaver     from 'file-saver'
import JSZip from 'jszip'
import {fileTemplates,itemTemplates} from 'templates/components'
import {humpToLine,iStyleToString,iClassToString,getArrClassToMap} from 'common/js/utils'
import PROJECT from 'templates/project'

const VUE_NAME = 'This#is#fileName'

let classMapToString = (map) => {
    let str = '{\n    '
    for (let key in  map){
        str += (key + ":" + map[key] + ";\n")
    }
    str += "}\n"
    return str

}

let iteratorList = (list,classMap,customClass) => {
    let classStr = ""
    if (Object.prototype.toString.call(list) === '[object Array]'){
        for (let item in list){
            let iClass = list[item].iClass
            iClass.forEach(classItem => {
                if(!classMap[classItem] && customClass[classItem]){
                    classMap[classItem] = customClass[classItem]
                    classStr += (classItem + " ")
                    classStr += classMapToString(classMap[classItem])
                }
            })

            if (list[item].componentName === 'Iflex'){
                classStr += iteratorList(list[item].num,classMap,customClass)
            } else if (list[item].componentName === undefined) {
                classStr += iteratorList(list[item].itemList,classMap,customClass)
            }
        }
    }
    return classStr

}

let beforDisposeListToClassDataString = (list,customClass) => {
    let classMap = {}
    let classStr = iteratorList(list,classMap,customClass)
    return classStr
}

/**
 * 提供list 导出组件的渲染后的递归模板
 * @param list
 * @param fun
 * @returns {*}
 * @private
 */
let _outExportItem = (list,fun) => {
    let x = ejs.render(itemTemplates,{list,fun,humpToLine,iStyleToString,iClassToString},{rmWhitespace:true})
    return x
}

/**
 * 从list 导出组件的渲染后的模板
 * @param list
 * @param customClass
 * @returns {*}
 */
let outExportStr = (list,customClass) => {
    let classData = beforDisposeListToClassDataString(list,customClass)
    let x = ejs.render(fileTemplates,{list,fun:_outExportItem,humpToLine,iStyleToString,iClassToString,classData},{rmWhitespace:true},)
    return x
}

/**
 * 提供单文件下载
 * @param fileName
 * @param str
 */
let outExportFileByStr = (fileName,str) => {
    str = str.replace(VUE_NAME,fileName.replace('.vue',''))
    let blob = new Blob([str], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, fileName)
}

/**
 * 从list 中提供下载，包含文件夹下的文件
 * @param fileName
 * @param list
 */
let outExportFolder = (fileName,list,customClass,commonFileParam) => {
    let pointer = new JSZip()
    pointer = _outExportFolder(fileName,list,customClass,commonFileParam,pointer)
    pointer.generateAsync({
        type: "blob"
    }).then((blob) => {
        FileSaver.saveAs(blob, `${fileName}.zip`)
    }, (err) => {
        alert('导出失败')
    })
}

let _outExportFolder = (fileName,list,customClass,commonFileParam,pointer) => {

    for (let i = 0; i < list.length; i++) {
        let item = list[i]
        let itemName = item.label
        if (item.type === 'folder'){
            let newPointer = pointer.folder(itemName)
            let folderList = item.children
            if (folderList){
                _outExportFolder(itemName,folderList,customClass,commonFileParam,newPointer)
            }
        } else {
            let fileText = ""
            if (item.isCanDrag === true){
                let dragList = item.dragList
                fileText = outExportStr(dragList,customClass)
                fileText = fileText.replace(VUE_NAME,itemName.replace('.vue',''))
            } else {
                fileText = outCommonExportFile(item.label,commonFileParam)
            }
            pointer.file(itemName, fileText)

        }
    }
    return pointer
}

let outExportFileByList = (folderName,obj) => {

}

/**
 * 导出默认内容
 * @param fileName
 * @param params
 * @returns {*}
 */
let outCommonExportFile = (fileName,params) => {
    let fileNameKey = fileName.replace('.','').toLowerCase()
    let fileTemplateStr = PROJECT[fileNameKey]
    if (fileTemplateStr) {
        let x = ejs.render(fileTemplateStr,params)
        return x
    }
    return ""
}

export {outExportFileByStr,outExportFileByList,outExportFolder,outExportStr,outCommonExportFile,VUE_NAME}