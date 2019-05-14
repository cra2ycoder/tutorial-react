var queryParamLocalObj = { ...predefinedQP }

function setQueryParamWithURL() {
  // console.dir({ queryParamLocalObj })
  var qpStr = []
  for (var p in queryParamLocalObj) {
    qpStr.push(`${p}=${queryParamLocalObj[p]}`)
  }

  inputElement.value = qpStr.join('&')
}

function updateQueryParam(obj, type) {
  if (obj !== null) {
    const stringifyObj = JSON.stringify(obj)
    queryParamLocalObj = {
      ...queryParamLocalObj,
      ...{ [type]: stringifyObj },
    }
    return queryParamLocalObj
  } else {
    // setQueryParams(null)
    return null
  }
  setQueryParamWithURL()
}

function mergeFilters(newFilter) {
  const prevFilterList = JSON.parse(queryParamLocalObj.filter)
  console.log({ prevFilterList })

  const merge = (pf, nf) => {
    const concat = { ...pf, ...nf }
    return {
      ...concat,
      value: [pf.value, nf.value],
    }
  }

  if (
    prevFilterList !== null &&
    prevFilterList !== undefined &&
    prevFilterList.filters.length > 0 &&
    (newFilter !== null || newFilter !== undefined)
  ) {
    const prevFilter = prevFilterList.filters.filter(
      item => item.field === newFilter.field
    )

    if (prevFilter.length > 0) {
      const mergedFilters = merge(prevFilter[0], newFilter)
      return mergedFilters
    }
  }

  return newFilter
}
