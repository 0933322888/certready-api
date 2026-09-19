export default function ComparisonTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto my-4 sm:my-6 -mx-4 sm:mx-0 px-4 sm:px-0">
      <div className="inline-block min-w-full align-middle border border-border rounded-xl overflow-hidden">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-surface-2 border-b-2 border-border">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-semibold text-text-primary border-r border-border last:border-r-0 whitespace-nowrap sm:whitespace-normal"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? 'bg-surface' : 'bg-surface-2/60'}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-text-primary border-r border-border last:border-r-0"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
