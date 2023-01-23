interface ProgressBarProps {
    progress: number
}

export function ProgressBar(props: ProgressBarProps) {

    return (
        <div
            role='progressbar'
            aria-valuenow={props.progress}
            aria-label='Progresso de hábitos completados nesse dia'
            className='h-3 rounded-xl bg-violet-600'
            style={{
                width: `${props.progress}%`
            }}
        >
        </div>
    )
}