import get from 'get-value'
import querystring from 'querystring'

function setQueryParamWithURL(obj) {
  var qpStr = []
  for (var p in obj) {
    qpStr.push(`${p}=${obj[p]}`)
  }
  return qpStr.length > 0 ? qpStr.join('&') : ''
}

function mergeFilters(newFilter, prevFilterList) {
  var prevFilters = [...prevFilterList]
  const merge = (pf, nf) => {
    const concat = { ...pf, ...nf }
    var value = []
    if (Array.isArray(pf.value)) {
      value = [...pf.value, nf.value]
    } else {
      value = [pf.value, nf.value]
    }

    return {
      ...concat,
      value,
    }
  }

  if (prevFilters.length > 0) {
    var matchedFilterIdx = -1

    /**
     * finding the matched filter item based on the new filter
     */
    const matchedFilters = prevFilters.filter((item, idx) => {
      matchedFilterIdx = idx
      return item.field === newFilter.field
    })

    /**
     * merging the prev filter + new filter
     */
    if (matchedFilters.length > 0) {
      const matchedFilter = matchedFilters[0]
      const mergedFilters = merge(matchedFilter, newFilter)
      prevFilters[matchedFilterIdx] = mergedFilters
    } else {
      /**
       * if no matches found - it will be a new value
       */
      prevFilters.push(newFilter)
    }
    return prevFilters
  } else {
    /**
     * if there is no filter in the prev list - this will create new
     */
    return [newFilter]
  }
}

export { setQueryParamWithURL, mergeFilters }
