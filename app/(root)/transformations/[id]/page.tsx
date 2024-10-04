
export default function ImageDetails({ params }: { params: { id: string } }) {
     return (
          <div>
               {`Image details ${params.id}`}
          </div>
     )
}