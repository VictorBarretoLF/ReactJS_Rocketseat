import styles from "./Comment.module.css";

import { FiThumbsUp, FiThumbsDown, FiTrash2 } from "react-icons/fi";

export function Comment() {
	return (
		<div className={styles.comment}>
			<img src="https://avatars.githubusercontent.com/u/88116771?v=4" alt="" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Víctor Barreto</strong>
							<time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
								Cerca de 1h atrás
							</time>
						</div>

						<button title="Deletar comentário">
							<FiTrash2 />
						</button>
					</header>

					<p>Muito bom Devon, parabéns!! 👏👏</p>
				</div>

				<footer>
					<button>
						<FiThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
